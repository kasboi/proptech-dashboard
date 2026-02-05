import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const propertySchema = z.object({
    title: z.string().min(1, "Title is required"),
    price: z.number().positive("Price must be positive"),
    address: z.string().min(1, "Address is required"),
    sqft: z.number().positive("Square footage must be positive"),
    bedrooms: z.number().int().min(0),
    bathrooms: z.number().int().min(0),
});

export type PropertyFormValues = z.infer<typeof propertySchema>;
