"use client";
import { bookingDElete } from "@/lib/data";
import {AlertDialog, Button} from "@heroui/react";
import { FaRegTrashAlt } from "react-icons/fa";

const DeleteBooking = ({bookingID}) => {
    const onDelete = async (bookingID)=> {
        await bookingDElete(bookingID)
    }
    return (
        <div>
            <AlertDialog>
                <Button variant="secondary" className={'text-red-500'}><FaRegTrashAlt /> <span className="text-[16px]">Delete</span></Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-100">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Delete Booking permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This will permanently delete <strong>My Awesome Project</strong> and all of its
                                    data. This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button onClick={()=> onDelete(bookingID)} slot="close" variant="danger">
                                    Delete Booking
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    )
}

export default DeleteBooking
