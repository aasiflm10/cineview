import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';

export function Footer() {
  return (
    <div className="w-full h-[319px] pt-[35px] bg-white">
      <div className=" flex justify-evenly ml-[211px]   mr-[135px] h-[178px] bg-black mb-[105px]">
        <div>
          Profile
          <div className="pt-8">
            <p>FAQ's</p>
            <p>Pricing Plans</p>
            <p>Order Tracking</p>
            <p>Returns</p>
          </div>
        </div>
        <div>
          Recent Post
          <div className="pt-8">
            <p>Touch of Uniqueness</p>
            <p>Offices you won't forget</p>
            <p>Cicilian</p>
          </div>
        </div>
        <div>
          Customer
          <div className="pt-8">
            <p>Help & contact us</p>
            <p>Return</p>
            <p>Online Stores</p>
            <p>Terms & condition</p>
          </div>
        </div>
        <div>
          Contact
          <div className="pt-8 flex space-x-4">
            <TwitterIcon/>
            <FacebookIcon/>
            <Instagram/>
            
          </div>
        </div>
      </div>
    </div>
  );
}
