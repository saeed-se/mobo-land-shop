import Container from "@/components/common/Container";
const WarrantySection = () => {
  return (
    <Container>
      <div className="mt-10 px-10 flex flex-wrap justify-between items-center *:flex *:flex-col *:items-center *:gap-2 text-xs  lg:text-sm *:m-auto *:mt-8">
        <div>
          <div>
            <img
              className="w-15 lg:w-20"
              src="/warranty/safepay.png"
              alt="safe-pay"
            />
          </div>
          <h2 className="font-dana-DemiBold text-sm lg:text-base">
            پرداخت امن
          </h2>
          <h4>پرداخت امن با درگاه بانکی</h4>
        </div>
        <div>
          <div>
            <img
              className="w-15 lg:w-20"
              src="/warranty/sendeverywhere.png"
              alt="send-everywhere"
            />
          </div>
          <h2 className="font-dana-DemiBold text-sm lg:text-base">
            ارسال به سراسر کشور
          </h2>
          <h4>ارسال با روش دلخواه شما</h4>
        </div>
        <div>
          <div>
            <img
              className="w-15 lg:w-20"
              src="/warranty/online-support.png"
              alt="online-support"
            />
          </div>
          <h2 className="font-dana-DemiBold text-sm lg:text-base">
            پشتیبانی آنلاین
          </h2>
          <h4>24 ساعته 7 روز هفته</h4>
        </div>
        <div>
          <div>
            <img
              className="w-15 lg:w-20"
              src="/warranty/packing.png"
              alt="packing"
            />
          </div>
          <h2 className="font-dana-DemiBold text-sm lg:text-base">
            بسته بندی شکیل
          </h2>
          <h4>نحوه ارسال درخور شخصیت شما</h4>
        </div>

        <div>
          <div>
            <img
              className="w-15 lg:w-20"
              src="/warranty/warranty-org.png"
              alt="warranty-org"
            />
          </div>
          <h2 className="font-dana-DemiBold text-sm lg:text-base">
            ضمانت بدون شرط
          </h2>
          <h4>7 روز ضمانت بازگشت بدون قید و شرط</h4>
        </div>
      </div>
    </Container>
  );
};

export default WarrantySection;
