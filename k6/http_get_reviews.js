import { sleep } from 'k6';
import http from 'k6/http';

export const options = {
  vus: 100,
  duration: '10s',
};

export default function () {
  const id = Math.floor(Math.random() * 2000000);
  http.get(`http://localhost:3007/restaurant/${id}/reviews`);
  sleep(0.01);
}
