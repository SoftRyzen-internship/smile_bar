import CallIcon from '/public/call.svg';
export const Call = () => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <CallIcon className="w-6 h-6 stroke-primary" />
      <a
        href="tel:+380688058744"
        className="text-center text-primary text-xl font-normal xl:text-base hover:underline hover:text-contact"
      >
        +38 068 805 87 44
      </a>
    </div>
  );
};
