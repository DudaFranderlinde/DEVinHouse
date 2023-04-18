export const UsuariosDocumentantion = {
    ApiOperation: {
        profile: {
            summary: 'Retorna as informações de usuário',
            description: 'Este endpoint retorna as informações de cadatro do usuário.'
        },
        updatePassword: {
            summary: 'Atualiza senha',
            description: 'Este endpoint recebe um body para alterar a senha.'
        },
    },
    ApiProperty: {
        updatePassword: {
            email: {
                name: 'email',
                description: 'Email de usuários',
                example: 'ricardo@gmail.com',
                type: String,
                required: true,
            },
            senhaAtual: {
                name: 'Senha Atual',
                description: 'Senha atual de usuários',
                example: '12345678910',
                type: String,
                required: true,
            },
            senha: {
                name: 'Nova Senha',
                description: 'Senha nova de usuários',
                example: '12345678',
                type: String,
                required: true,  
            },
            confirmaNovaSenha: {
                name: 'Confirmação de Nova Senha',
                description: 'Confirmação de senha',
                example: '12345678',
                type: String,
                required: true,    
            }
        }
    },
    ApiResponse: {

    }
}