import { DateTime } from 'luxon';
import { faker } from '@faker-js/faker';
import { v4 } from 'uuid';

const colors = [
  'indigo',
  'blue',
  'orange',
  'red',
  'pink',
  'crimson',
  'dodgerblue',
  'brown',
  'purple',
  'tomato',
  'salmon',
  'gray',
];

export const generateDemoEvents = (
  date = DateTime.now(),
  count = 250
) => {
  const events = [];

  // console.log(DateTime)

  const start = date
    .set({ day: 1 })
    .minus({ month: 2 })
    .toFormat('yyyy-MM-dd');
  const end = date
    .set({ day: 28 })
    .plus({ month: 2 })
    .toFormat('yyyy-MM-dd');


  // console.log({ start, end });

  for (let i = 1; i < count; i += 1) {
    const dateStart = faker.date.between(start, end);



    const hour = Math.floor(Math.random() * 23) + 1;
    const minute = Math.floor(Math.random() * 40) + 1;
    const minuteDuration = Math.floor(Math.random() * 120) + 30;


    const startDate = DateTime.fromJSDate(dateStart).set({
      hour: hour,
      minute: minute,
    });

    const endDate = startDate.plus({ minute: minuteDuration });

    const event = {
      id: v4(),
      startAt: startDate.toUTC().toString(),
      endAt: endDate.toUTC().toString(),
      summary: faker.commerce.department(),
      color: colors[Math.floor(Math.random() * colors.length - 1) + 1],
      allDay: endDate.day !== startDate.day,
      // style: {
      //   textDecoration: 'line-through',
      //   border: 'solid 1px red',
      //   background: 'white',
      //   color: 'black',
      // },
    };

    events.push(event);
  }

  return events;
};
