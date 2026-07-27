import React, { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

function Contact() {
    const form = useRef();

    const [isSending, setIsSending] = useState(false);
    const [messageSent, setMessageSent] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();

        setIsSending(true);
        setMessageSent(false);

        try {
            await emailjs.sendForm(
                "service_2v1e8ho",
                "template_5la8xnb",
                form.current,
                {
                    publicKey: "v48qYKiSaa3GFUF14",
                }
            );

            setMessageSent(true);

            e.target.reset();

        } catch (error) {
            console.error("FAILED...", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSending(false);
        }
    };


    return (

        <div className="flex justify-around items-center flex-wrap gap-8 my-6">
            {/* contact info */}
            <div className="flex flex-col justify-center space-y-6 w-[350px]" >
                
                <h2 className="text-[#89D7B7] text-2xl font-semibold ">
                    Contact Information
                </h2>
                <div className="flex items-center gap-6">
                    <div className="w-10 h-10 rounded-full text-[#FFF4E1]  bg-[#89D7B7]
                    flex justify-center items-center">
                        <Mail />
                    </div>
                    <div className="text-[#FFF4E1]" >
                        <h3 className="font-semibold text-lg">Email</h3>
                        <p>doaasophe483@gmail.com</p>
                    </div> 
                </div>

                <div className="flex items-center gap-6">
                    <div className="w-10 h-10 rounded-full text-[#FFF4E1]  bg-[#89D7B7]
                    flex justify-center items-center">
                        <Phone />
                    </div>
                    <div className="text-[#FFF4E1]" >
                        <h3 className="font-semibold text-lg">Phone</h3>
                        <p>01272648832</p>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="w-10 h-10 rounded-full text-[#FFF4E1]  bg-[#89D7B7]
                    flex justify-center items-center">
                        <MapPin />
                    </div>
                    <div className="text-[#FFF4E1]" >
                        <h3 className="font-semibold text-lg">Location</h3>
                        <p>Egypt - Zagazig</p>
                    </div>
                </div>
            </div>

            {/* contact form */}
            <div className=" rounded-xl bg-[rgba(66,132,117,0.7)]  
                   p-3  mt-10 p-4 text-[#FFF4E1] w-[500px] h-[420px] ">
                <form action="" className="space-y-4" ref={form} onSubmit={sendEmail}>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="user_name" className="font-semibold ">Name</label>
                        <input type="text" id="user_name" name="user_name" required
                            className="border h-8 text-[#428475] p-1 rounded-lg bg-[#FFF4E1]
                              focus:outline-none" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="user_email" className="font-semibold ">E-mail</label>
                        <input type="email" id="user_email" name="user_email" required
                            className="border h-8 text-[#428475] p-1 rounded-lg bg-[#FFF4E1]
                              focus:outline-none" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="message" className="font-semibold ">Massege</label>
                        <textarea name="" id="message" name="message" required
                            className="border p-2 text-[#428475] rounded-lg bg-[#FFF4E1] focus:outline-none
                            placeholder-[#428475] placeholder:text-xs"
                            rows="4" placeholder="Write Massege.." >

                        </textarea>
                    </div>
                    <div>
                        <button type="submit" disabled={isSending}
                            className="bg-[#89D7B7] p-2 w-[100px] flex justify-center items-center gap-2
                            text-lg font-semibold rounded-xl 
                            hover:shadow-[0_0_5px_5px_rgba(255,180,140,0.45)] transition-all duration-300">
                            <Send size={18} />  {isSending ? "Sending..." : "Send"}
                        </button>
                        {messageSent && (
                            <p className="text-[#89D7B7] text-xs">
                                Message sent successfully! ✓
                            </p>
                        )}
                    </div>
                    

                </form>
            </div>
        </div>
    )

}

export default Contact;