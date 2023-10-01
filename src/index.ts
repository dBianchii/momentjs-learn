import moment from "moment";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const jsDate = new Date();
  const momentDate = moment().utc().toDate();

  //* PRISMA AND DATABASES

  //* Let's see what happens we save the js Date and time to database
  const createdDb = await prisma.dateTimeModel.create({
    data: {
      value: jsDate,
      valueAsString: jsDate.toString(),
    },
  });

  console.log(createdDb.value); //It will return the date in UTC format.

  //* Let's see what happens we save the moment Date and time to database
  const createdDb2 = await prisma.dateTimeModel.create({
    data: {
      value: momentDate,
      valueAsString: momentDate.toString(),
    },
  });

  console.log(createdDb2.value); //It will return the date in UTC format.

  console.log(moment(createdDb.value).isSame(createdDb2.value)); // true
}

main()
  .then(async () => {
    await prisma.dateTimeModel.deleteMany({});
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
