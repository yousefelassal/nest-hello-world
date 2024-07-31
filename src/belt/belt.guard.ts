import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class BeltGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // logic to determine if user should be allowed to access the route or not
    const request = context.switchToHttp().getRequest(); // eslint-disable-line @typescript-eslint/no-unused-vars
    // const auth = request.headers['authorization'];
    // if (auth !== 'Bearer mysecuretoken') {
    //   return false;
    // }
    return true;
  }
}
