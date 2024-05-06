import type { Meta, StoryObj} from '@storybook/react';
import { Footer } from './Footer';


const menuOptions = [
    {
        key:"1",
        name: 'about link'
    },
    {
        key:"2",
        name: 'contact link'
    }
  ]
  

const meta: Meta<typeof Footer> = {
    title: "Footer",
    component: Footer,
    args: {
        intent: "dark",
        underline:false,
        children: "Footer",
        size: "md",
        menu: menuOptions
    },
    argTypes: {
        intent: {
            options: ["bright", "dark"],
            control: {type: "select"},
        },
        size: {
            options: ["sm", "md"],
            control: {type: "select"},
        }
    }
}

type Story = StoryObj<typeof Footer>

export const Default: Story = {
    render: (args) => <Footer {...args} />
}

export default meta