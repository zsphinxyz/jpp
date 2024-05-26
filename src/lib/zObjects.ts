import {z} from 'zod';


// const resumeSchema = z.custom<File | undefined>().refine(
//     file => {
//         !file || (file instanceof File && file.type.startsWith('image/'))
//     }, "Must be an image file"
//     ).refine(file => {
//         return !file || file.size < 1024 * 1024 * 2
//     }, "File must be last than 2MB.")
    
    
const strReq = z.string().trim().min(1, 'Required!')

export const candidateSchema = z.object({
    name: strReq.max(30, 'User Name is too Long'),
    email: strReq.email(),
    dob: z.string().optional(),
    gender: z.enum(['male', 'female', 'other']),
    phone: z.string().optional(),
    address: z.string().optional(),
    degree: z.string().optional(),
    experience: z.string().optional(),
    tag: z.string().optional(),
    // about: z.string().optional(),
    // resume: z.object({
    //     file: z.instanceof(File).optional(),
    // })
    // resume: resumeSchema,
})
export type TCandidateSchema = z.infer<typeof candidateSchema>


export const employerSchema = z.object({
    name: strReq,
    email: strReq.email(),
    location: strReq,
})
export type TEmployerSchema = z.infer<typeof employerSchema>


export const jobPostSchema = z.object({
    job: z.string(),
    salary: z.string(),
    location: z.string(),
})
export type TJobPostSchema = z.infer<typeof jobPostSchema>

