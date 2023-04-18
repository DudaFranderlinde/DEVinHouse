export const DispositivosDocumentation = {
    ApiOperation: {
        getDetails: {
            summary: 'Retorna os detalhes do dispositivo',
            description: 'Este endpoint retorna as informações de dispositivo.'
        },
        getAll: {
            summary: 'Retorna todos os dispositivo',
            description: 'Este endpoint retorna todos os dispositivo.'
        },
        addDevice: {
            summary: 'Retorna um dispositivo vinculado',
            description: 'Este endpoint recebe e vincula um dispositivo.'
        },
    },
    ApiProperty: {
        addDevice: {
            idDevice: {
                name: 'IdDevice',
                description: 'Id de dispositivos',
                example:1,
                type: Number,
                required: true,
            },
            local: {
                name: 'Local',
                description: 'Local que será vinculado ao dispositov',
                example: 'Sala',
                type: String,
                required: true,
            }
        }
    },
    ApiResponse: {

    }
}