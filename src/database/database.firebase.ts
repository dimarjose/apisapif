import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as fireorm from 'fireorm';

admin.initializeApp();
const firestore = admin.firestore();
fireorm.initialize(firestore);

@Injectable()
export class DatabaseFirebase {}
