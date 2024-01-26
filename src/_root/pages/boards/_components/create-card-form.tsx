import { useParams } from "react-router-dom"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useCreateCardInList } from "@/lib/react-query/queries"

import { toast } from "sonner"

const formSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required"
    }),
})

const CreateCardForm = ({ listId }: { listId: string }) => {

    const { boardId } = useParams<{ boardId: string }>()

    const { mutateAsync: createCard, isPending } =
        useCreateCardInList(boardId as string);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            await createCard({
                id: listId,
                cardName: data.name
            })

            toast.success('Card created!')
        } catch (error) {
            toast.error('Error creating card!')
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Card name
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="Enter a card name"
                                    disabled={isPending}
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                👋 It&apos;s necessary to enter a name for your card.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    className="w-full"
                    disabled={isPending}
                >
                    Create card
                </Button>
            </form>
        </Form>
    )
}

export default CreateCardForm