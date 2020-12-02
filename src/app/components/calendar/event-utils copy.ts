import { EventInput } from '@fullcalendar/angular';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: TODAY_STR
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: TODAY_STR + 'T12:00:00'
  },
  {
    id: createEventId(),
    title: 'Teste de Reserva',
    start: '2020-08-17',
    end: '2020-08-21',
    display: 'background',
    editable: false
  }
];

export function createEventId() {
  return String(eventGuid++);
}
