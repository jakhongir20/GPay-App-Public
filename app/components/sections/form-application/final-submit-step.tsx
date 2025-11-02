"use client";
import { FC } from "react";
import { Collapse } from "@/app/components/shared/Collapse";

interface Props {
  className?: string;
}

export const FinalSubmitStep: FC<Props> = ({ className }) => {

  return (
    <section>
      <div className={"mb-12"}>
        <img src={"/images/status.svg"} className={"w-16 h-16"} />
      </div>
      <div className="flex flex-col">
        <h2 className="text-section-title mb-6 max-w-[600px]">
          Ваша заявка готова!
        </h2>
        <p className="text-section-subtitle max-w-[450px]">
          Осталось проверить правильность введенных данных и можно отправлять
        </p>
      </div>
      <hr className={"border w-full border-[#1C1C1C] my-8"} />
      <Collapse title="Информация о бизнесе" defaultOpen className="mb-4">
        <div className={"p-6 bg-[#141414] rounded-xl"}>
          <form className="w-full space-y-6">
            <div>
              <label
                className="mb-2 block text-base tracking-[-0.16px] text-white/60"
              >
                Тип компании <span className="text-text-primary">*</span>
              </label>
              <div className="relative">
                <input
                  placeholder={"Резидент Республики Узбекистан"}
                  className="w-full appearance-none rounded-lg bg-[#212121] px-4 py-4 pr-10 text-white/60 outline-none transition-colors hover:border-gray-500 focus:border-button-primary focus:ring-1 focus:ring-button-primary"
                />
              </div>
            </div>
          </form>
        </div>
      </Collapse>

      <Collapse title="Данные контактного лица" className="mb-4">
        <div className={"p-6 bg-[#141414] rounded-xl"}>
          <p className="text-white/60 text-sm">Проверьте, что контактные данные корректны.</p>
        </div>
      </Collapse>
    </section>
  );
};
