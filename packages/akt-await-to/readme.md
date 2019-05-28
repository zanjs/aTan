
```ts
import awaito from '@akt/await-to';
// If you use CommonJS (i.e NodeJS environment), it should be:
// const to = require('@akt/await-to').default;

async function asyncTaskWithCb(cb) {
     let err, user, savedTask, notification;

     [ err, user ] = await awaito(UserModel.findById(1));
     if(!user) return cb('No user found');

     [ err, savedTask ] = await awaito(TaskModel({userId: user.id, name: 'Demo Task'}));
     if(err) return cb('Error occurred while saving task');

    if(user.notificationsEnabled) {
       [ err ] = await awaito(NotificationService.sendNotification(user.id, 'Task Created'));
       if(err) return cb('Error while sending notification');
    }

    if(savedTask.assignedUser.id !== user.id) {
       [ err, notification ] = await awaito(NotificationService.sendNotification(savedTask.assignedUser.id, 'Task was created for you'));
       if(err) return cb('Error while sending notification');
    }

    cb(null, savedTask);
}

async function asyncFunctionWithThrow() {
  const [err, user] = await awaito(UserModel.findById(1));
  if (!user) throw new Error('User not found');
  
}
```