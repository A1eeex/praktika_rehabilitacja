const TheFooter = () => {
  return (
  <footer className="text-gray-600 body-font">
    <div className="w-1/3">
      <svg xmlns="http://www.w3.org/2000/svg" fill="#e5097f" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 m-auto">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
      <div className="text-center font-bold">Rehabilitacja Medyczna <span className="text-main-color">Praktika</span></div>
      <div className="text-center">ul. Szopena 25a/1L</div>
      <div className="text-center">35-055 Rzeszów</div>
    </div>
  </footer>
  );
};

export default TheFooter;
