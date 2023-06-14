import * as yup from 'yup';
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;



export const basicSchema=yup.object().shape({
    email:yup
    .string()
    .email('Geçerli bir email giriniz')
    .required('email girmek zorunludur'),

    age:yup
    .number()
    .positive('lütfen pozitif bir yaş giriniz')
    .integer('lütfen tam sayı giriniz')
    .required('yaş girmek zorunludur'),

    password:yup
    .string()
    .min(5,'Lütfen min beş karakter giriniz')
    .matches(passwordRules,{message:'Lütfen en az 1 büyük harf ve 1 syaı giriniz',})
    .required('Şifre girmek zorunludur'),

    confirmPassword:yup
    .string()
    .oneOf([yup.ref('password')],'Şifreler Eşleşmiyor')
    .required('Tekrar şifre girmek zorunludur.'),
})