-- Create rooms table for listings
CREATE TABLE public.rooms (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  owner_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  location TEXT NOT NULL,
  price INTEGER NOT NULL CHECK (price > 0),
  property_type TEXT NOT NULL CHECK (property_type IN ('1 BHK', '2 BHK', '1 Bed', '2 Bed', '3 Bed')),
  tenant_preference TEXT NOT NULL CHECK (tenant_preference IN ('Bachelor', 'Family', 'Girls', 'Working')),
  contact_number TEXT NOT NULL,
  description TEXT,
  images TEXT[] DEFAULT '{}',
  is_available BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.rooms ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can view available rooms
CREATE POLICY "Anyone can view available rooms"
  ON public.rooms
  FOR SELECT
  USING (is_available = true);

-- Policy: Owners can view all their own rooms
CREATE POLICY "Owners can view their own rooms"
  ON public.rooms
  FOR SELECT
  TO authenticated
  USING (auth.uid() = owner_id);

-- Policy: Authenticated users can create rooms
CREATE POLICY "Users can create their own rooms"
  ON public.rooms
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = owner_id);

-- Policy: Owners can update their own rooms
CREATE POLICY "Users can update their own rooms"
  ON public.rooms
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = owner_id)
  WITH CHECK (auth.uid() = owner_id);

-- Policy: Owners can delete their own rooms
CREATE POLICY "Users can delete their own rooms"
  ON public.rooms
  FOR DELETE
  TO authenticated
  USING (auth.uid() = owner_id);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic updated_at
CREATE TRIGGER update_rooms_updated_at
  BEFORE UPDATE ON public.rooms
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Create storage bucket for room images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('room-images', 'room-images', true);

-- Storage policies for room images
CREATE POLICY "Anyone can view room images"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'room-images');

CREATE POLICY "Authenticated users can upload room images"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'room-images' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can update their own room images"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (bucket_id = 'room-images' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their own room images"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'room-images' AND auth.uid()::text = (storage.foldername(name))[1]);