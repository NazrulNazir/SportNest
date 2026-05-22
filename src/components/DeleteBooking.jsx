"use client";

import { bookingDElete } from "@/lib/data";
import { AlertDialog, Button } from "@heroui/react";
import { FaRegTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const DeleteBooking = ({ bookingID }) => {

    const onDelete = async (bookingID) => {
        const toastId = toast.loading("Deleting...");
        try {
            const result = await bookingDElete(bookingID);
            if (result.success) {
                toast.success(result.message, {
                    id: toastId,
                });
            } else {

                toast.error(result.message, {
                    id: toastId,
                });
            }

        } catch (error) {

            toast.error("Something went wrong", {
                id: toastId,
            });
        }
    };

    return (
        <div>
            <AlertDialog>
                <Button
                    variant="secondary"
                    className={'text-red-500'}
                >
                    <FaRegTrashAlt />
                    <span className="text-[16px]">
                        Delete
                    </span>
                </Button>

                <AlertDialog.Backdrop>
                    <AlertDialog.Container>

                        <AlertDialog.Dialog className="sm:max-w-100">

                            <AlertDialog.CloseTrigger />

                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />

                                <AlertDialog.Heading>
                                    Delete Booking permanently?
                                </AlertDialog.Heading>

                            </AlertDialog.Header>

                            <AlertDialog.Body>
                                <p>
                                    This will permanently delete this booking
                                    and all of its data.
                                </p>
                            </AlertDialog.Body>

                            <AlertDialog.Footer>

                                <Button
                                    slot="close"
                                    variant="tertiary"
                                >
                                    Cancel
                                </Button>

                                <Button
                                    onClick={() => onDelete(bookingID)}
                                    slot="close"
                                    variant="danger"
                                >
                                    Delete Booking
                                </Button>

                            </AlertDialog.Footer>

                        </AlertDialog.Dialog>

                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default DeleteBooking;