import { BellRing, Search } from 'lucide-react'
import MetricCard from './metric-card'
import OrdersTable from './orders-table'
import OverviewChart from './overview-chart'
import ProfileCard from './profile-card'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-16 items-center border-b px-4">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <div className="ml-auto flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-[200px] pl-8 md:w-[300px]"
            />
          </div>
          <Button variant="ghost" size="icon">
            <BellRing className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-2">
            <span className="text-sm">Switch to Buyer</span>
            <Switch />
          </div>
        </div>
      </header>
      <main className="flex-1 space-y-4 p-8 pt-6">
        <div className="grid gap-4 md:grid-cols-3">
          <MetricCard
            title="Avg. Selling Price"
            value="$121.10"
            change={9.82}
            trend="up"
          />
          <MetricCard
            title="Avg. Clicks"
            value="1,912"
            change={51.71}
            trend="down"
          />
          <MetricCard
            title="Avg. Impressions"
            value="120,192"
            change={43.71}
            trend="down"
          />
        </div>
        <div className="grid gap-4 md:grid-cols-7">
          <div className="col-span-5">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Overview Order</CardTitle>
                  <Button variant="outline" size="sm">
                    Monthly
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <OverviewChart />
              </CardContent>
            </Card>
            <Card className="mt-4">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Orders</CardTitle>
                  <Button variant="outline" size="sm">
                    Sort
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <OrdersTable />
              </CardContent>
            </Card>
          </div>
          <div className="col-span-2 space-y-4">
            <ProfileCard />
            <Card>
              <CardHeader>
                <CardTitle>Improve your service!</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Improve your service by reading article by top seller
                </p>
                <Button className="mt-4 w-full" variant="outline">
                  View More Article
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

