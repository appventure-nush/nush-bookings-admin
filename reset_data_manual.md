## Running the .js file 

At the same folder as ```package.json```, run ```node src/api/interactivedebug.js``` to get an interactive js terminal to run the below. 

## Resetting timeslot quotas 

### generating tgs array 

NOTE: i generated the tgs array by using python code: 

```
from datetime import datetime, timedelta 

startdt = datetime(2026, 1, 1, 9, 00) # start at 9 
tgs = []                   
for timep in range(0, 335, 15): # 0900 + 330 min is 
    for group in groups:
        tgs.append((startdt+timedelta(minutes=timep)).strftime("%H%M")+"_"+group)
print(tgs) 
```

### Console code 

Can first delete slotsLeft/slotsLeft document fields in firebase 

```
const tgs = ['0900_A1', '0900_A2', '0900_B1', '0900_B2', '0900_C1', '0900_C2', '0915_A1', '0915_A2', '0915_B1', '0915_B2', '0915_C1', '0915_C2', '0930_A1', '0930_A2', '0930_B1', '0930_B2', '0930_C1', '0930_C2', '0945_A1', '0945_A2', '0945_B1', '0945_B2', '0945_C1', '0945_C2', '1000_A1', '1000_A2', '1000_B1', '1000_B2', '1000_C1', '1000_C2', '1015_A1', '1015_A2', '1015_B1', '1015_B2', '1015_C1', '1015_C2', '1030_A1', '1030_A2', '1030_B1', '1030_B2', '1030_C1', '1030_C2', '1045_A1', '1045_A2', '1045_B1', '1045_B2', '1045_C1', '1045_C2', '1100_A1', '1100_A2', '1100_B1', '1100_B2', '1100_C1', '1100_C2', '1115_A1', '1115_A2', '1115_B1', '1115_B2', '1115_C1', '1115_C2', '1130_A1', '1130_A2', '1130_B1', '1130_B2', '1130_C1', '1130_C2', '1145_A1', '1145_A2', '1145_B1', '1145_B2', '1145_C1', '1145_C2', '1200_A1', '1200_A2', '1200_B1', '1200_B2', '1200_C1', '1200_C2', '1215_A1', '1215_A2', '1215_B1', '1215_B2', '1215_C1', '1215_C2', '1230_A1', '1230_A2', '1230_B1', '1230_B2', '1230_C1', '1230_C2', '1245_A1', '1245_A2', '1245_B1', '1245_B2', '1245_C1', '1245_C2', '1300_A1', '1300_A2', '1300_B1', '1300_B2', '1300_C1', '1300_C2', '1315_A1', '1315_A2', '1315_B1', '1315_B2', '1315_C1', '1315_C2', '1330_A1', '1330_A2', '1330_B1', '1330_B2', '1330_C1', '1330_C2', '1345_A1', '1345_A2', '1345_B1', '1345_B2', '1345_C1', '1345_C2', '1400_A1', '1400_A2', '1400_B1', '1400_B2', '1400_C1', '1400_C2', '1415_A1', '1415_A2', '1415_B1', '1415_B2', '1415_C1', '1415_C2', '1430_A1', '1430_A2', '1430_B1', '1430_B2', '1430_C1', '1430_C2']; 
for (const tg of tgs) {
    await updateDoc(doc(db, 'slotsLeft/slotsLeft'), {
        [tg]: 12,
    });
}
```

## Resetting booking records 
```
for (const tourGroup of tgs) {
	var bookingsRef = collection(db, `tourGroups/${tourGroup}/bookings`);
	var bs = await getDocs(bookingsRef); 
	const deletePromises = bs.docs.map((document) => {
		return deleteDoc(doc(bookingsRef, document.id));
	});

	await Promise.all(deletePromises);
} 
```

NOTE that you should ignore the 900_A1 records and stuff like that (we stopped using them in 2026 in favour of 0900, but didn't manually delete from firebase) 

