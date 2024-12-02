import { Text } from 'app/components/ui/text'
import { View } from 'app/components/ui/view'


import { Pressable } from 'app/components/ui/pressable'
import { Box } from 'app/components/ui/box'
import { useParams, useRouter, useSearchParams } from 'solito/navigation'

import {Div } from '@expo/html-elements'

const useUserParams = useParams<{ id: string }>


function UserDetailScreen() {
  const { id } = useUserParams()
  const router = useRouter()
  const searchParams = useSearchParams()


  return (
    <Box className='flex-1 bg-purple-400 items-center w-full min-h-screen' >
      <Pressable className='font-bold text-white text-2xl' onPress={() => router.back()}>
        <Text>{id}, here is the search param: {searchParams?.get('search')}</Text>
      </Pressable>
    </Box>
  )
}

export default UserDetailScreen
