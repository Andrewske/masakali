## /hook

### updateRates

: rates have been updated on Smoobu

> Should update the rates in the database

### newReservation

: a reservation has been created in Smoobu

> Should add the reservation to the database
> _if needed, block associated villa (Akasha & Lasksmi),
> should update the database with blocked reservation as well_

### updateReservation

: a reservation has been updated in Smoobu

> Find the previous reservation and update
> _if needed, find the associated block and update_

This would create a circular reference like so:

1. Akasha is updated
2. We update Lasksmi
3. Receive another hook for Laskmi
4. We update Akasha
5. And repeat

So I need to put in something that blocks this

The problem is that the hook does not contain any information about the previous dates. Is there a way that I can keep the blocked id in the notice

So when we create the block in the newReservation, we update the reservation in Smoobu with the associated block id

Then if we receive an update for Akasha or Laksmi then we look for the associated block id

Then we need to compare the startDate and endDate, if they are different we can update the block to match the reservation. Otherwise we do nothing. That should end the loop

Actually if the update is for a block we can do nothing since that should never happen unless it's done manually in which case I hope whoever did that knows what they are doing.
