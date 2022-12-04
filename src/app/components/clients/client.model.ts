export interface Client {
    uuid?: string,
    name: string,
    status: string,
    score: number ,
    scheduledAppointments: string[],
    appointmentsConcluded: string[]
}

export interface ClientRequest {
    name: string,
    age: number | null,
}
