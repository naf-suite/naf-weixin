
declare namespace Naf.Weixin {

  declare interface MessageData {
    toUser: string;
    fromUser: string;
    msgType: string;
  }

  declare interface EventData {
    event: string;
    eventKey: string;
    ticket: string;
  }

  export interface MessageUtil {

    static extractFromXml(xmlData: string): MessageData;

    static contentFromXml(xmlData: string): string;

    static recognitionFromXml(xmlData: string): string;

    static eventFromXml(xmlData: string): EventData;

    static tryParse(xmlData: string, regex: RegExp): string;

    static generateXml(toUser: string, fromUser: string, textContent: string): string;
  }
}

