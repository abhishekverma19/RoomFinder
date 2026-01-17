import { z } from "zod";

export const roomFormSchema = z.object({
  title: z
    .string()
    .trim()
    .min(5, "Title must be at least 5 characters")
    .max(100, "Title must be less than 100 characters"),
  location: z
    .string()
    .trim()
    .min(5, "Location must be at least 5 characters")
    .max(200, "Location must be less than 200 characters"),
  price: z
    .number()
    .positive("Price must be greater than 0")
    .max(1000000, "Price must be less than ₹10,00,000"),
  propertyType: z.enum(["1 BHK", "2 BHK", "1 Bed", "2 Bed", "3 Bed"], {
    required_error: "Please select a property type",
  }),
  tenantPreference: z.enum(["Bachelor", "Family", "Girls", "Working"], {
    required_error: "Please select tenant preference",
  }),
  contactNumber: z
    .string()
    .trim()
    .regex(/^\+?[0-9]{10,15}$/, "Enter a valid phone number (10-15 digits)"),
  description: z
    .string()
    .trim()
    .max(1000, "Description must be less than 1000 characters")
    .optional(),
});

export type RoomFormData = z.infer<typeof roomFormSchema>;

export const propertyTypes = ["1 BHK", "2 BHK", "1 Bed", "2 Bed", "3 Bed"] as const;
export const tenantPreferences = ["Bachelor", "Family", "Girls", "Working"] as const;
