import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable() 
export class LocalAuthGuard extends AuthGuard('local') {}
 // class를 만들어서 AuthGuard('local')을 직접 전달 X