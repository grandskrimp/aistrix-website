export const submitMessage =
  "Спасибо! Заявка подготовлена. После подключения backend она будет отправляться в Telegram, email или CRM.";

export default function FormMessage() {
  return (
    <div className="rounded-[24px] border border-blue-100 bg-blue-50 p-5 text-sm font-semibold leading-7 text-blue-800">
      {submitMessage}
    </div>
  );
}
