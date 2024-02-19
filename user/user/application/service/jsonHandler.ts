import * as fs from 'fs';
import {randomUUID} from "node:crypto";

export const USER_ENTITY_JSON_NAME = 'user.json';
export const CARD_ENTITY_JSON_NAME = 'card.json';
export enum CreationStatus {
    OK = 0,
    ERROR
}
export class JsonHandler {
    getData(entity: typeof USER_ENTITY_JSON_NAME|typeof CARD_ENTITY_JSON_NAME, params: {
        attribute: string,
        value: string
    }[]): any {
        const data = JSON.parse(fs.readFileSync(entity, 'utf-8'));
        return data;
    }

    createData(entity: typeof USER_ENTITY_JSON_NAME|typeof CARD_ENTITY_JSON_NAME, value: object): string|CreationStatus.ERROR {
        try {
            // @ts-ignore
            value.id = randomUUID();
            fs.writeFileSync(entity, JSON.stringify(value));
            // @ts-ignore
            return value.id;
        } catch (e) {
            return CreationStatus.ERROR;
        }
    }
}