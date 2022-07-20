interface FieldValidations {
    ValidateEmail: (email: string) => boolean;
}

const fields = {
    email: 'hiago@email.com'
}

interface ResponseEmailParams {
    validator: FieldValidations['ValidateEmail'];
    email: string;
}

const ResponseForEmailField = ({validator, email}: ResponseEmailParams): string => {
        return validator(email) ? "Email Valido": "Email Nao Valido"
    }


const verifyEmail: FieldValidations['ValidateEmail'] = (email: string) => {
    return /@/.test(email)
}

console.log(
    ResponseForEmailField({
        email: fields.email,
        validator: verifyEmail,
    })
)

// solucao: eu peco a dependencia de um validador que vira de algum outro lugar e na hora que invocar a funcao principal
// coloco qual e essa dependencia (na hora de pedir uma outra o contrato ainda estara la)

export {}