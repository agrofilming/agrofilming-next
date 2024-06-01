import { IStepperForm } from '@/containers/BriefPage/interface';

export function sendEmail(data: IStepperForm) {
  const apiEndpoint = 'api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(response => {
      alert(response.message);
    })
    .catch(err => {
      alert(err);
    });
}
