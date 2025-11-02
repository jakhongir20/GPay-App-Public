import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-4 bg-body-bg">
      <div className="container-custom">
        <div className="py-16">
          <div
            className="grid grid-cols-2 gap-x-3 gap-y-10 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-10 lg:grid-cols-[260px_repeat(5,minmax(0,1fr))]"
          >
            <div className="flex flex-col justify-between gap-4 lg:min-w-[225px]">
              <Link href="/"
              ><img src="/images/Logo.svg" alt="Logo"
              /></Link>
              <div>
                <img src="/images/PSI_DSS.svg" alt="PSI DSS" className="h-10" />
              </div>
            </div>
            <div className="sm:max-w-[158px]">
              <h2
                className="mb-4 text-base font-normal leading-[21px] tracking-[-0.18px] text-white sm:mb-8 sm:text-lg"
              >
                Платежные решения
              </h2>
              <ul className="flex flex-col gap-2.5 sm:gap-4">
                <li>
                  <a
                    className="text-xs font-normal leading-[19px] tracking-[0.14px] text-[#989898] sm:text-sm"
                    href="#"
                  >Прием платежей</a
                  >
                </li>
                <li>
                  <a
                    className="text-sm font-normal leading-[19px] tracking-[0.14px] text-[#989898]"
                    href="#"
                  >Расщепление платежа</a
                  >
                </li>
                <li>
                  <a
                    className="text-sm font-normal leading-[19px] tracking-[0.14px] text-[#989898]"
                    href="#"
                  >Платежи через Telegram</a
                  >
                </li>
                <li>
                  <a
                    className="text-sm font-normal leading-[19px] tracking-[0.14px] text-[#989898]"
                    href="#"
                  >Возврат средств</a
                  >
                </li>
                <li>
                  <a
                    className="text-sm font-normal leading-[19px] tracking-[0.14px] text-[#989898]"
                    href="#"
                  >Кабинет мерчанта</a
                  >
                </li>
              </ul>
            </div>
            <div className="sm:max-w-[158px]">
              <h2
                className="mb-4 text-base font-normal leading-[21px] tracking-[-0.18px] text-white sm:mb-8 sm:text-lg"
              >
                О компании


              </h2>
              <ul className="flex flex-col gap-2.5 sm:gap-4">
                <li>
                  <a
                    className="text-xs font-normal leading-[19px] tracking-[0.14px] text-[#989898] sm:text-sm"
                    href="#"
                  >Команда</a
                  >
                </li>
                <li>
                  <a
                    className="text-sm font-normal leading-[19px] tracking-[0.14px] text-[#989898]"
                    href="#"
                  >Документы</a
                  >
                </li>
                <li>
                  <a
                    className="text-sm font-normal leading-[19px] tracking-[0.14px] text-[#989898]"
                    href="#"
                  >Сертификаты</a
                  >
                </li>
                <li>
                  <a
                    className="text-sm font-normal leading-[19px] tracking-[0.14px] text-[#989898]"
                    href="#"
                  >Безопасность</a
                  >
                </li>
                <li>
                  <a
                    className="text-sm font-normal leading-[19px] tracking-[0.14px] text-[#989898]"
                    href="#"
                  >Кейсы и отзывы</a
                  >
                </li>
              </ul>
            </div>
            <div className="sm:max-w-[158px]">
              <h2
                className="mb-4 text-base font-normal leading-[21px] tracking-[-0.18px] text-white sm:mb-8 sm:text-lg"
              >
                Разработчикам
              </h2>
              <ul className="flex flex-col gap-2.5 sm:gap-4">
                <li>
                  <a
                    className="text-xs font-normal leading-[19px] tracking-[0.14px] text-[#989898] sm:text-sm"
                    href="#"
                  >Документация </a
                  >
                </li>
              </ul>
            </div>
            <div className="sm:max-w-[158px]">
              <h2
                className="mb-4 text-base font-normal leading-[21px] tracking-[-0.18px] text-white sm:mb-8 sm:text-lg"
              >
                Помощь
              </h2>
              <ul className="flex flex-col gap-2.5 sm:gap-4">
                <li>
                  <a
                    className="text-xs font-normal leading-[19px] tracking-[0.14px] text-[#989898] sm:text-sm"
                    href="#"
                  >FAQ</a
                  >
                </li>
                <li>
                  <a
                    className="text-sm font-normal leading-[19px] tracking-[0.14px] text-[#989898]"
                    href="#"
                  >Поддержка</a
                  >
                </li>
                <li>
                  <a
                    className="text-sm font-normal leading-[19px] tracking-[0.14px] text-[#989898]"
                    href="#"
                  >Контакты</a
                  >
                </li>
              </ul>
            </div>
            <div className="sm:max-w-[158px]">
              <h2
                className="mb-4 text-base font-normal leading-[21px] tracking-[-0.18px] text-white sm:mb-8 sm:text-lg"
              >
                Контакты
              </h2>
              <ul className="flex flex-col gap-2.5 sm:gap-4">
                <li>
                  <a
                    className="text-xs font-normal leading-[19px] tracking-[0.14px] text-[#989898] sm:text-sm"
                    href="#"
                  >Telegram</a
                  >
                </li>
                <li>
                  <a
                    className="text-sm font-normal leading-[19px] tracking-[0.14px] text-[#989898]"
                    href="#"
                  >E-mail</a
                  >
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


