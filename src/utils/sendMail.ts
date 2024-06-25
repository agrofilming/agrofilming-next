import { IStepperForm } from '@/containers/BriefPage/interface';

export const sendEmail = (data: IStepperForm) => {
  console.log(data);
  fetch('/api/email', {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(response => {
      console.log(response);
      alert(response.message);
    })
    .catch(err => {
      alert(err);
    });
};
