import {z} from 'zod';

export const signInFormSchema = z.object({
    email: z.string().email().min(1, 'Email is Required!!'),
    password: z.string().min(1, 'Password is Required')
})

export const singUpFormSchema = z.object({
    username: z.string().min(1, 'User Name is required!'),
    email: z.string().email(),
    password: z.string().min(8, 'Password must be at least 8 characters.'),
    cpassword: z.string(),
})

export type TsignUpFormSchema = z.infer<typeof singUpFormSchema>