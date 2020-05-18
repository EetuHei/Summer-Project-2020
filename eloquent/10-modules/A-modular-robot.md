Id make buildGraph be a module that thakes input as array of data for roads and roadGraph.
VillageState woulde be a module that user can call for, this would be depended on buildGraph, roagGraph, randomPick and mailRoute.

I would make the robots be depnded to VillageState and mailRoute, so you could call for robot that would require a call to the VillageState to get the random route and parcels.
