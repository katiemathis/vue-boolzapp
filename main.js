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
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di usare il v-for',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ]
                },
                {
                    nome: 'Alice',
                    avatar: '_io',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Hai fatto i compiti?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Non ho ancora finito i bonus.',
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
                            date: '28/03/2020 10:10:40',
                            text: 'La Beppa va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicura di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Ah! Scusa!',
                            status: 'received'
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
                            text: 'Comunque ragazzi, molto bello Vue!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Una figata!',
                            status: 'received'
                        }
                    ],
                },
            ],
        },
        methods: {
            assignActive(index) {
                this.active = index;
            },
            addNewMessage: function () {
                const newMessageOb = {
                    date: 'now',
                    text: this.newMessage,
                    status: 'sent'
                };
                  
                this.contacts[this.active].messages.push(newMessageOb);
                this.newMessage = '';

                const newReply = {
                    date: 'now',
                    text: 'ok',
                    status: 'received',
                };

                let that = this;
                setTimeout(function() {
                    that.contacts[that.active].messages.push(newReply)
                }, 1000);

            },
        },
    },
)