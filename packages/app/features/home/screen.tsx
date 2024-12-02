import { Box } from "app/components/ui/box"
import { HStack } from "app/components/ui/hstack"
import {View } from "app/components/ui/view"
import { Text } from 'app/components/ui/text'
import { Button, ButtonText, ButtonIcon } from 'app/components/ui/button'
import { Link } from 'solito/link'
import { Pressable } from "app/components/ui/pressable"
import { EditIcon } from 'lucide-react-native'

function HomeScreen() {
  return (
    <Box className="flex-1 items-center justify-center min-h-full w-full bg-red-600 p-5">
      <Text className="text-typography-600 text-2xl font-bold">
        This is the Home Screen
      </Text>

      <HStack
        space="lg"
        reversed={false}
        className="bg-secondary-600 flex w-full flex-wrap justify-center p-5"
      >
        <Box className="h-[400px] w-[200px] rounded-xl bg-red-300" />
        <Box className="h-[400px] w-[200px] rounded-xl bg-red-300" />
        <Box className="h-[400px] w-[200px] rounded-xl bg-red-300" />
      </HStack>

      <Link
        href="/user/Fernando?search=hey!"
        className="rounded-xl bg-yellow-400 px-4 py-2 text-white"
      >
        <Button variant="solid"
          className="rounded-xl bg-yellow-400 hover:bg-yellow-300 px-6 py-3 text-white"
        >
          <ButtonIcon as={EditIcon} className="ml-2" />
          <ButtonText className="z-50 font-bold text-white">
            Go to User Profile 2
          </ButtonText>
        </Button>
      </Link>
    </Box>
  )
}

export default HomeScreen