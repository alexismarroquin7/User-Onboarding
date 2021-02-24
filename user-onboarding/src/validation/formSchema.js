import * as yup from "yup";

const formSchema = yup.object().shape({
    name: yup.string()
        .required('Must enter a name'),
    email: yup.string()
        .email('Must enter a valid email'),
    password: yup.string()
        .required('Must enter a password')
        .min(6, 'Password must be at least 6 characters.'),
    tos: yup.boolean()
})

export default formSchema;