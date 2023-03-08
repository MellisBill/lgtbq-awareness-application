import React from 'react'
import { useState, useEffect } from 'react'
export const FormAcceptModal = (props: any) => {

  const { setOpen } = props;
  const [accepted, setAccepted] = useState(false);


  const onContinue = () => {
    if (accepted) {
      localStorage.setItem('accepted', 'true');
      setOpen(false);
    }
  }

  return <>
  <h2>Terms and Conditions</h2>
    <p className='terms-content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium laboriosam doloremque quod vero, modi possimus id iste. Molestiae totam ratione culpa veritatis, sunt ad iste praesentium aliquid, iusto reprehenderit eveniet? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi quisquam fuga architecto! Alias, exercitationem dolore? Fuga ullam officia dicta? Nisi maxime mollitia, officia veritatis minus quis laudantium fugiat ut molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam incidunt quo esse beatae doloremque ex nobis rem totam, harum dolore aliquam. Nesciunt error quas ducimus explicabo suscipit, ratione nisi assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquam aliquid placeat cum sit reprehenderit, aspernatur corporis quas esse quam corrupti eius! Perspiciatis minima impedit veritatis vitae cupiditate ex quod recusandae voluptatum vero dicta voluptatibus ab temporibus veniam laboriosam maiores, eligendi modi! Ullam, est recusandae iusto unde repudiandae voluptatum distinctio tenetur adipisci repellat exercitationem quidem, voluptatem labore nesciunt sunt. Iusto mollitia quidem atque unde molestias, tempora explicabo tenetur, quaerat libero, nulla rerum. Provident inventore facilis aliquam consequatur ea id distinctio. Quasi dolor corporis porro iste neque nulla doloremque! Velit excepturi mollitia maxime? Culpa aspernatur ipsum est iusto atque dolore totam.</p>
    <form className='accept-terms-form' onSubmit={(e => e.preventDefault())}>
      <div className='accept-check-container'>
        <button className='button-no-style' onClick={() => setAccepted(!accepted)}>
          <span className="material-symbols-outlined">
            { accepted ? 'check_box' : 'check_box_outline_blank' }
          </span>
        </button>
        <p>I have read and accepted the terms and conditions</p>
      </div>
      <button className='continue' disabled={!accepted} onClick={() => onContinue()}>Continue</button>
    </form>
  </>
}
