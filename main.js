const app = new Vue (
    {
        el: '#app',
        data: {
            newMessage: '',
            active: 0,
            contacts: [
                {
                    nome: 'Marianna',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai risolto il problema di javascript?',
                            status: 'sent'
                        }
                    ]
                },
                {
                    nome: 'Alice',
                    avatar: '_io',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai risolto il problema di javascript?',
                            status: 'sent'
                        }
                    ]
                },
                {
                    nome: 'Angela',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai risolto il problema di javascript?',
                            status: 'sent'
                        }
                    ]
                },
                {
                    nome: 'Boolean Class #53',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai risolto il problema di javascript?',
                            status: 'sent'
                        }
                    ]
                }
            ]

        }
    }
)