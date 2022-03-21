import { createSubgroupString } from '../utils';
import stubSchedule from "../stub-schedule";


class ScheduleService {

  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  getSchedule = async (group) => {
    const response = await fetch(`${this._baseUrl}${group}`);

    if (!response.ok) {
      throw new Error('Something went wrong with fetch schedule');
    }

    const data = await response.json();

    return {
      ...data,
      schedule: this._transformSchedule(data.schedule)
    };
  };

  getStubSchedule = async (group) => {
    return new Promise((resolve, reject) => {
      if (Math.random() < 0.8) {
        resolve(stubSchedule);
      }
      reject('Error');
    })
  }

  _transformSchedule(schedule) {
    return schedule.map(item => {
      return {
        ...item,
        dailySchedule: item.dailySchedule.map(dailyItem => {
          return {
            ...dailyItem,
            type: {
              ...dailyItem.type,
              subgroup: createSubgroupString(dailyItem.type.subgroup)
            }
          };
        })
      };
    });
  }
}

const scheduleService = new ScheduleService('https://tsu-schedule-api.xyz/schedule/');
export default scheduleService;