const Departamentos = () => {
  return (
    <div className='flex flex-col xl:h-40 gap-6 xl:gap-8 transition-opacity animate-[fade-in_1s_ease-in]  w-full xl:w-3/5 text-white'>
      <p className=' text-2xl xl:text-4xl'>
        Nuestros{' '}
        <span className='text-[#715bd4]'>
          Departamentos
        </span>
      </p>
      <div className='h-full justify-start items-start flex-col gap-4 flex xl:flex-row xl:items-center xl:gap-16'>
        <div className='flex border-2 hvr-fade border-[#715bd4] text-[#715bd4] font-medium rounded-2xl p-3 w-56 xl:w-auto xl:p-5 flex-col items-start justify-start '>
          <p className=' text-base xl:text-2xl'>General</p>
          <p className='text-xs text-white xl:text-xl'>
            hola@maycamevolve.com
          </p>
        </div>
        <div className='flex border-2 hvr-fade border-[#715bd4] text-[#715bd4] font-medium rounded-2xl p-3 w-56 xl:w-auto xl:p-5 flex-col items-start '>
          <p className=' text-base xl:text-2xl'>
            Deportivo
          </p>
          <p className='text-xs text-white xl:text-xl'>
            meg@maycamevolve.com
          </p>
        </div>
        <div className='flex border-2 hvr-fade border-[#715bd4] text-[#715bd4] font-medium rounded-2xl p-3 w-56 xl:w-auto xl:p-5 flex-col items-start '>
          <p className=' text-base xl:text-2xl'>
            Marketing
          </p>
          <p className='text-xs text-white xl:text-xl'>
            marketing@maycamevolve.com
          </p>
        </div>
      </div>
    </div>
  );
};
export default Departamentos;
