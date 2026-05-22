"use client";
// import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

const AddProducts = () => {

    const onSubmit = (e)=> {
        e.preventDefault();
        const formData = new FormData(e.target);
        const NewData = Object.fromEntries(formData.entries());
        console.log(NewData);

        const postFun = async ()=> {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations`, {
                method: 'POST', 
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(NewData)
            })

            const data = await res.json();

            console.log('after fetch data', data);
            return data;
        }
        postFun()
    }

    return (
        <Modal>
            <Button variant="secondary">Add Products</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text">
                                        <Label className = 'text-gray-700'>Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField className="w-full" name="photoUrl" type="text">
                                        <Label className = 'text-gray-700'>Photo url</Label>
                                        <Input placeholder="Enter your Photo " />
                                    </TextField>
                                    <TextField className="w-full" name="email" type="email">
                                        <Label className = 'text-gray-700'>Email</Label>
                                        <Input placeholder="Enter your email" />
                                    </TextField>
                                    <TextField className="w-full" name="phone" type="tel">
                                        <Label className = 'text-gray-700'>Phone</Label>
                                        <Input placeholder="Enter your phone number" />
                                    </TextField>
                                    <TextField className="w-full" name="company">
                                        <Label className = 'text-gray-700'>Company</Label>
                                        <Input placeholder="Enter your company name" />
                                    </TextField>
                                    <TextField className="w-full" name="message">
                                        <Label className = 'text-gray-700'>Message</Label>
                                        <Input placeholder="Enter your message" />
                                    </TextField>
                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit" slot="close">Add Products</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    )
}

export default AddProducts
