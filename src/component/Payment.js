import React,{useState} from 'react';
import './Payment.css'

const Payment = () => {
    const [isabout, setisabout] = useState(false);

    const getdata = () => {
        const api = [
            {
              "Image": "https://picsum.photos/id/0/200/150",
              "About": "I am a appdeveloper",
              "Name": "Kennedy Pollard",
              "CreditCard": "+1 (879) 424-3903",
              "Address": "AquoavoBeard Street,Wildwood,Marshall Islands,Mexico,832387",
              "PaymentGetway": "The Payment Getway Link",
              "PayeeId": "a125ef15-88ab-4afa-a676-8e680beaf2b7"
            },
            {
              "Image": "https://picsum.photos/id/1000/200/150",
              "About": "I am a Cyber Security agent",
              "Name": "Caldwell Foley",
              "CreditCard": "+1 (937) 566-2852",
              "Address": "IsologixSuydam Street,Stagecoach,Michigan,Burkina Faso,213639",
              "PaymentGetway": "The Payment Getway Link",
              "PayeeId": "306f1ab1-f1f8-4112-9bc6-ea514ba6108c"
            },
            {
              "Image": "https://picsum.photos/id/1003/200/150",
              "About": "I am a webdeveloper",
              "Name": "Burton Gillespie",
              "CreditCard": "+1 (955) 532-2166",
              "Address": "DentrexFord Street,Russellville,Massachusetts,Turks and Caicos Islands,528224",
              "PaymentGetway": "The Payment Getway Link",
              "PayeeId": "235e0331-f837-4669-80a8-905b224aae15"
            },
            {
              "Image": "https://picsum.photos/id/100/200/150",
              "About": "I am a webdeveloper",
              "Name": "Goldie Deleon",
              "CreditCard": "+1 (922) 535-3034",
              "Address": "ZogakNoel Avenue,Gambrills,North Carolina,Kuwait,923511",
              "PaymentGetway": "The Payment Getway Link",
              "PayeeId": "10d8b5f5-6d20-4086-bea8-d34a0fa58691"
            },
            {
              "Image": "https://picsum.photos/id/1018/200/150",
              "About": "I am a appdeveloper",
              "Name": "Lelia Blevins",
              "CreditCard": "+1 (812) 421-3636",
              "Address": "BizmaticVermont Court,Ventress,Delaware,Poland,681509",
              "PaymentGetway": "The Payment Getway Link",
              "PayeeId": "959c8c53-cd6c-4152-aa91-5daaa58c2f28"
            },
            {
              "Image": "https://picsum.photos/id/10/200/150",
              "About": "I am a webdeveloper",
              "Name": "Valenzuela English",
              "CreditCard": "+1 (847) 551-2029",
              "Address": "ApextriNeptune Avenue,Lynn,North Dakota,Kyrgyzstan,100468",
              "PaymentGetway": "The Payment Getway Link",
              "PayeeId": "63ba224e-d379-48ac-bda5-1adf5d099d65"
            },
            {
              "Image": "https://picsum.photos/id/1001/200/150",
              "About": "I am a appdeveloper",
              "Name": "Lee Chandler",
              "CreditCard": "+1 (846) 539-2661",
              "Address": "EventixStewart Street,Wanamie,Tennessee,Anguilla,707842",
              "PaymentGetway": "The Payment Getway Link",
              "PayeeId": "100ef597-d620-4254-a482-132147d18162"
            },
            {
              "Image": "https://picsum.photos/id/1002/200/150",
              "About": "I am a appdeveloper",
              "Name": "Phoebe Peters",
              "CreditCard": "+1 (816) 486-3707",
              "Address": "ZeamLorraine Street,Healy,Florida,Sao Tome and Principe,529290",
              "PaymentGetway": "The Payment Getway Link",
              "PayeeId": "c1c42c13-fcd8-4e20-abd1-b804f794601a"
            },
            {
              "Image": "https://picsum.photos/id/0/200/150",
              "About": "I am a appdeveloper",
              "Name": "Velma Dejesus",
              "CreditCard": "+1 (847) 552-3329",
              "Address": "AvitTaaffe Place,Corriganville,Alaska,Kiribati,308367",
              "PaymentGetway": "The Payment Getway Link",
              "PayeeId": "d7adffad-fa66-4d10-a788-b44bcaee8d3a"
            }
          ]
        return api;
    }
    const getapi = getdata();
    return (
        <div className="Payment_page">
            <div className="payee_container">
                {getapi.map((item)=>{
                    return (<>
                        <div className="payee_box">
                            <div className="payee_image">
                                <img className="payee_image_img" src={item.Image} alt="" />
                            </div>
                            <div className="payee_content">
                                <div className="payee_name">{item.Name}</div>
                                <div className="payee_about">{item.About}</div>
                                <div className="payee_address">{item.Address}</div>
                                <div className="payee_des"></div>
                                <div className="payeey_buttons">
                                    <div className="payee_btn payee_pay_btn">Pay</div>
                                    {/* <div className="payee_btn payee_about_btn" onClick="">About</div> */}
                                </div>
                            </div>
                        </div>
                    </>)
                })}
            </div>
        </div>
    )
}

export default Payment