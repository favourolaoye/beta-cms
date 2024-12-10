import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Pencil } from 'lucide-react'

export default function ProfileCard() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/avatar.jpg" />
            <AvatarFallback>DD</AvatarFallback>
          </Avatar>
          <h3 className="mt-4 text-lg font-semibold">Dhira Danuarta</h3>
          <p className="text-sm text-muted-foreground">
            <MapPin className="mr-1 inline-block h-4 w-4" />
            Indonesia
          </p>
          <Button variant="outline" size="sm" className="mt-4">
            <Pencil className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
          <div className="mt-4 grid w-full grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-semibold">100%</p>
              <p className="text-muted-foreground">Response rate</p>
            </div>
            <div>
              <p className="font-semibold">39%</p>
              <p className="text-muted-foreground">Delivery on time</p>
            </div>
            <div>
              <p className="font-semibold">89%</p>
              <p className="text-muted-foreground">Order completed</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

