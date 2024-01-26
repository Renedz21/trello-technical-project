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
import { useCreateList } from "@/lib/react-query/queries"
import { useParams } from "react-router-dom"

import { toast } from "sonner"

const formSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required"
    }),
})

const CreateListForm = () => {

    const { boardId } = useParams<{ boardId: string | any }>()

    const { mutateAsync: createList, isPending } = useCreateList(boardId)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            await createList({
                idBoard: boardId,
                listName: data.name
            })
            toast.success('List created!')
        } catch (error) {
            toast.error('Error creating list!')
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
                                List name
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="Enter a list name"
                                    disabled={isPending}
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                👋 It&apos;s necessary to enter a name for your list.
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
                    Create list
                </Button>
            </form>
        </Form>
    )
}

export default CreateListForm