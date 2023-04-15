import React from 'react'

const UnvalidPage = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-[100vh]'>
      <div className='text-8xl text-myorange m-5'>404</div>
      <div className='text-2xl mb-2 text-darkgray'>페이지를 찾을 수 없습니다.</div>
      <p className='text-lg text-lightgray'>올바른 URL을 입력하셨는지 확인해주세요.</p>
    </div>
  )
}

export default UnvalidPage;
