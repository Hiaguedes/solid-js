interface FieldValidations {
    ValidateEmail: (email: string) => boolean;
}

const fields = {
    email: 'hiago@email.com'
}

const ResponseForEmailField = (email: string): string => {
        return verifyEmail(email) ? "Email Valido": "Email Nao Valido"
    }


const verifyEmail: FieldValidations['ValidateEmail'] = (email: string) => {
    return /@/.test(email)
}

console.log(
    ResponseForEmailField(fields.email)
)

// dentro da funcao que retorna a resposta crio uma dependencia forte com a funcao verifyEmail

export {}

