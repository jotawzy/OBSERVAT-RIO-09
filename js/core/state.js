import { EmailsDatabase } from "../database/emails";

export const gameState = {
    currentDay: 1,
    time: "21:34",

    // database de email clonada para que as alterações de "lido: true" fique salva aqui
    emails: [...EmailsDatabase],
    unlockedFiles: [],
    historyLogs: [], 
    insideObservatory: [],
}